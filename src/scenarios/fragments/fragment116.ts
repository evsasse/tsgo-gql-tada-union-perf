import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken114 } from "./fragment114";
import type { FragmentToken115 } from "./fragment115";

export const FRAGMENT_116 = gql(`
  fragment Fragment116 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult116 = ResultOf<typeof FRAGMENT_116>;
type FragmentSelf116 = NonNullable<FragmentResult116>;

export type FragmentToken116 =
  | FragmentSelf116["__typename"]
  | FragmentSelf116["typenameHint"] | FragmentToken114 | FragmentToken115;
