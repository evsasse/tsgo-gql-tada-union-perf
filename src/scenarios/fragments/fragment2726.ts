import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2724 } from "./fragment2724";
import type { FragmentToken2725 } from "./fragment2725";

export const FRAGMENT_2726 = gql(`
  fragment Fragment2726 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult2726 = ResultOf<typeof FRAGMENT_2726>;
type FragmentSelf2726 = NonNullable<FragmentResult2726>;

export type FragmentToken2726 =
  | FragmentSelf2726["__typename"]
  | FragmentSelf2726["typenameHint"] | FragmentToken2724 | FragmentToken2725;
