import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2059 } from "./fragment2059";
import type { FragmentToken2060 } from "./fragment2060";

export const FRAGMENT_2061 = gql(`
  fragment Fragment2061 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult2061 = ResultOf<typeof FRAGMENT_2061>;
type FragmentSelf2061 = NonNullable<FragmentResult2061>;

export type FragmentToken2061 =
  | FragmentSelf2061["__typename"]
  | FragmentSelf2061["typenameHint"] | FragmentToken2059 | FragmentToken2060;
