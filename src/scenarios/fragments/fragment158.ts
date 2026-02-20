import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken156 } from "./fragment156";
import type { FragmentToken157 } from "./fragment157";

export const FRAGMENT_158 = gql(`
  fragment Fragment158 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult158 = ResultOf<typeof FRAGMENT_158>;
type FragmentSelf158 = NonNullable<FragmentResult158>;

export type FragmentToken158 =
  | FragmentSelf158["__typename"]
  | FragmentSelf158["typenameHint"] | FragmentToken156 | FragmentToken157;
