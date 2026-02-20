import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2854 } from "./fragment2854";
import type { FragmentToken2855 } from "./fragment2855";

export const FRAGMENT_2856 = gql(`
  fragment Fragment2856 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult2856 = ResultOf<typeof FRAGMENT_2856>;
type FragmentSelf2856 = NonNullable<FragmentResult2856>;

export type FragmentToken2856 =
  | FragmentSelf2856["__typename"]
  | FragmentSelf2856["typenameHint"] | FragmentToken2854 | FragmentToken2855;
