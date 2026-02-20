import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken717 } from "./fragment717";
import type { FragmentToken718 } from "./fragment718";

export const FRAGMENT_719 = gql(`
  fragment Fragment719 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult719 = ResultOf<typeof FRAGMENT_719>;
type FragmentSelf719 = NonNullable<FragmentResult719>;

export type FragmentToken719 =
  | FragmentSelf719["__typename"]
  | FragmentSelf719["typenameHint"] | FragmentToken717 | FragmentToken718;
