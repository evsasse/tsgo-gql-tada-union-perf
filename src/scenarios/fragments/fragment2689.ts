import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2687 } from "./fragment2687";
import type { FragmentToken2688 } from "./fragment2688";

export const FRAGMENT_2689 = gql(`
  fragment Fragment2689 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult2689 = ResultOf<typeof FRAGMENT_2689>;
type FragmentSelf2689 = NonNullable<FragmentResult2689>;

export type FragmentToken2689 =
  | FragmentSelf2689["__typename"]
  | FragmentSelf2689["typenameHint"] | FragmentToken2687 | FragmentToken2688;
