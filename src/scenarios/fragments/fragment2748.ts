import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2746 } from "./fragment2746";
import type { FragmentToken2747 } from "./fragment2747";

export const FRAGMENT_2748 = gql(`
  fragment Fragment2748 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult2748 = ResultOf<typeof FRAGMENT_2748>;
type FragmentSelf2748 = NonNullable<FragmentResult2748>;

export type FragmentToken2748 =
  | FragmentSelf2748["__typename"]
  | FragmentSelf2748["typenameHint"] | FragmentToken2746 | FragmentToken2747;
