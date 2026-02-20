import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3770 } from "./fragment3770";
import type { FragmentToken3771 } from "./fragment3771";

export const FRAGMENT_3772 = gql(`
  fragment Fragment3772 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult3772 = ResultOf<typeof FRAGMENT_3772>;
type FragmentSelf3772 = NonNullable<FragmentResult3772>;

export type FragmentToken3772 =
  | FragmentSelf3772["__typename"]
  | FragmentSelf3772["typenameHint"] | FragmentToken3770 | FragmentToken3771;
