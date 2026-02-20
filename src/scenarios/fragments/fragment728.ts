import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken726 } from "./fragment726";
import type { FragmentToken727 } from "./fragment727";

export const FRAGMENT_728 = gql(`
  fragment Fragment728 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult728 = ResultOf<typeof FRAGMENT_728>;
type FragmentSelf728 = NonNullable<FragmentResult728>;

export type FragmentToken728 =
  | FragmentSelf728["__typename"]
  | FragmentSelf728["typenameHint"] | FragmentToken726 | FragmentToken727;
