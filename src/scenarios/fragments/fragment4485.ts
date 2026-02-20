import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4483 } from "./fragment4483";
import type { FragmentToken4484 } from "./fragment4484";

export const FRAGMENT_4485 = gql(`
  fragment Fragment4485 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult4485 = ResultOf<typeof FRAGMENT_4485>;
type FragmentSelf4485 = NonNullable<FragmentResult4485>;

export type FragmentToken4485 =
  | FragmentSelf4485["__typename"]
  | FragmentSelf4485["typenameHint"] | FragmentToken4483 | FragmentToken4484;
