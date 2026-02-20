import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2032 } from "./fragment2032";
import type { FragmentToken2033 } from "./fragment2033";

export const FRAGMENT_2034 = gql(`
  fragment Fragment2034 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult2034 = ResultOf<typeof FRAGMENT_2034>;
type FragmentSelf2034 = NonNullable<FragmentResult2034>;

export type FragmentToken2034 =
  | FragmentSelf2034["__typename"]
  | FragmentSelf2034["typenameHint"] | FragmentToken2032 | FragmentToken2033;
