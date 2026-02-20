import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2870 } from "./fragment2870";
import type { FragmentToken2871 } from "./fragment2871";

export const FRAGMENT_2872 = gql(`
  fragment Fragment2872 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult2872 = ResultOf<typeof FRAGMENT_2872>;
type FragmentSelf2872 = NonNullable<FragmentResult2872>;

export type FragmentToken2872 =
  | FragmentSelf2872["__typename"]
  | FragmentSelf2872["typenameHint"] | FragmentToken2870 | FragmentToken2871;
