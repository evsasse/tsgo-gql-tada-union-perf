import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4156 } from "./fragment4156";
import type { FragmentToken4157 } from "./fragment4157";

export const FRAGMENT_4158 = gql(`
  fragment Fragment4158 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult4158 = ResultOf<typeof FRAGMENT_4158>;
type FragmentSelf4158 = NonNullable<FragmentResult4158>;

export type FragmentToken4158 =
  | FragmentSelf4158["__typename"]
  | FragmentSelf4158["typenameHint"] | FragmentToken4156 | FragmentToken4157;
