import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2532 } from "./fragment2532";
import type { FragmentToken2533 } from "./fragment2533";

export const FRAGMENT_2534 = gql(`
  fragment Fragment2534 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult2534 = ResultOf<typeof FRAGMENT_2534>;
type FragmentSelf2534 = NonNullable<FragmentResult2534>;

export type FragmentToken2534 =
  | FragmentSelf2534["__typename"]
  | FragmentSelf2534["typenameHint"] | FragmentToken2532 | FragmentToken2533;
