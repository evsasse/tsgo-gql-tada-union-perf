import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken745 } from "./fragment745";
import type { FragmentToken746 } from "./fragment746";

export const FRAGMENT_747 = gql(`
  fragment Fragment747 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult747 = ResultOf<typeof FRAGMENT_747>;
type FragmentSelf747 = NonNullable<FragmentResult747>;

export type FragmentToken747 =
  | FragmentSelf747["__typename"]
  | FragmentSelf747["typenameHint"] | FragmentToken745 | FragmentToken746;
