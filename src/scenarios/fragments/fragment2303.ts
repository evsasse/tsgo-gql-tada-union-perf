import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2301 } from "./fragment2301";
import type { FragmentToken2302 } from "./fragment2302";

export const FRAGMENT_2303 = gql(`
  fragment Fragment2303 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult2303 = ResultOf<typeof FRAGMENT_2303>;
type FragmentSelf2303 = NonNullable<FragmentResult2303>;

export type FragmentToken2303 =
  | FragmentSelf2303["__typename"]
  | FragmentSelf2303["typenameHint"] | FragmentToken2301 | FragmentToken2302;
