import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4316 } from "./fragment4316";
import type { FragmentToken4317 } from "./fragment4317";

export const FRAGMENT_4318 = gql(`
  fragment Fragment4318 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult4318 = ResultOf<typeof FRAGMENT_4318>;
type FragmentSelf4318 = NonNullable<FragmentResult4318>;

export type FragmentToken4318 =
  | FragmentSelf4318["__typename"]
  | FragmentSelf4318["typenameHint"] | FragmentToken4316 | FragmentToken4317;
