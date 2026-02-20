import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2858 } from "./fragment2858";
import type { FragmentToken2859 } from "./fragment2859";

export const FRAGMENT_2860 = gql(`
  fragment Fragment2860 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult2860 = ResultOf<typeof FRAGMENT_2860>;
type FragmentSelf2860 = NonNullable<FragmentResult2860>;

export type FragmentToken2860 =
  | FragmentSelf2860["__typename"]
  | FragmentSelf2860["typenameHint"] | FragmentToken2858 | FragmentToken2859;
