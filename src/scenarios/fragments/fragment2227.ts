import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2225 } from "./fragment2225";
import type { FragmentToken2226 } from "./fragment2226";

export const FRAGMENT_2227 = gql(`
  fragment Fragment2227 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult2227 = ResultOf<typeof FRAGMENT_2227>;
type FragmentSelf2227 = NonNullable<FragmentResult2227>;

export type FragmentToken2227 =
  | FragmentSelf2227["__typename"]
  | FragmentSelf2227["typenameHint"] | FragmentToken2225 | FragmentToken2226;
