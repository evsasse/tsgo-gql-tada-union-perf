import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2872 } from "./fragment2872";
import type { FragmentToken2873 } from "./fragment2873";

export const FRAGMENT_2874 = gql(`
  fragment Fragment2874 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult2874 = ResultOf<typeof FRAGMENT_2874>;
type FragmentSelf2874 = NonNullable<FragmentResult2874>;

export type FragmentToken2874 =
  | FragmentSelf2874["__typename"]
  | FragmentSelf2874["typenameHint"] | FragmentToken2872 | FragmentToken2873;
