import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken716 } from "./fragment716";
import type { FragmentToken717 } from "./fragment717";

export const FRAGMENT_718 = gql(`
  fragment Fragment718 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult718 = ResultOf<typeof FRAGMENT_718>;
type FragmentSelf718 = NonNullable<FragmentResult718>;

export type FragmentToken718 =
  | FragmentSelf718["__typename"]
  | FragmentSelf718["typenameHint"] | FragmentToken716 | FragmentToken717;
