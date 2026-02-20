import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4315 } from "./fragment4315";
import type { FragmentToken4316 } from "./fragment4316";

export const FRAGMENT_4317 = gql(`
  fragment Fragment4317 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult4317 = ResultOf<typeof FRAGMENT_4317>;
type FragmentSelf4317 = NonNullable<FragmentResult4317>;

export type FragmentToken4317 =
  | FragmentSelf4317["__typename"]
  | FragmentSelf4317["typenameHint"] | FragmentToken4315 | FragmentToken4316;
