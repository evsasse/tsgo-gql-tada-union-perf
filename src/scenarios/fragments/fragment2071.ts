import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2069 } from "./fragment2069";
import type { FragmentToken2070 } from "./fragment2070";

export const FRAGMENT_2071 = gql(`
  fragment Fragment2071 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult2071 = ResultOf<typeof FRAGMENT_2071>;
type FragmentSelf2071 = NonNullable<FragmentResult2071>;

export type FragmentToken2071 =
  | FragmentSelf2071["__typename"]
  | FragmentSelf2071["typenameHint"] | FragmentToken2069 | FragmentToken2070;
