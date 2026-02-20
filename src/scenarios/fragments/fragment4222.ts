import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4220 } from "./fragment4220";
import type { FragmentToken4221 } from "./fragment4221";

export const FRAGMENT_4222 = gql(`
  fragment Fragment4222 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult4222 = ResultOf<typeof FRAGMENT_4222>;
type FragmentSelf4222 = NonNullable<FragmentResult4222>;

export type FragmentToken4222 =
  | FragmentSelf4222["__typename"]
  | FragmentSelf4222["typenameHint"] | FragmentToken4220 | FragmentToken4221;
