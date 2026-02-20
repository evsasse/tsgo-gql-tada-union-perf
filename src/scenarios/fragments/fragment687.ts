import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken685 } from "./fragment685";
import type { FragmentToken686 } from "./fragment686";

export const FRAGMENT_687 = gql(`
  fragment Fragment687 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult687 = ResultOf<typeof FRAGMENT_687>;
type FragmentSelf687 = NonNullable<FragmentResult687>;

export type FragmentToken687 =
  | FragmentSelf687["__typename"]
  | FragmentSelf687["typenameHint"] | FragmentToken685 | FragmentToken686;
