import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4431 } from "./fragment4431";
import type { FragmentToken4432 } from "./fragment4432";

export const FRAGMENT_4433 = gql(`
  fragment Fragment4433 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult4433 = ResultOf<typeof FRAGMENT_4433>;
type FragmentSelf4433 = NonNullable<FragmentResult4433>;

export type FragmentToken4433 =
  | FragmentSelf4433["__typename"]
  | FragmentSelf4433["typenameHint"] | FragmentToken4431 | FragmentToken4432;
