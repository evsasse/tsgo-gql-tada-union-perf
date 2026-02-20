import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2745 } from "./fragment2745";
import type { FragmentToken2746 } from "./fragment2746";

export const FRAGMENT_2747 = gql(`
  fragment Fragment2747 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult2747 = ResultOf<typeof FRAGMENT_2747>;
type FragmentSelf2747 = NonNullable<FragmentResult2747>;

export type FragmentToken2747 =
  | FragmentSelf2747["__typename"]
  | FragmentSelf2747["typenameHint"] | FragmentToken2745 | FragmentToken2746;
