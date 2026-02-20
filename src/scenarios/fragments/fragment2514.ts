import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2512 } from "./fragment2512";
import type { FragmentToken2513 } from "./fragment2513";

export const FRAGMENT_2514 = gql(`
  fragment Fragment2514 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult2514 = ResultOf<typeof FRAGMENT_2514>;
type FragmentSelf2514 = NonNullable<FragmentResult2514>;

export type FragmentToken2514 =
  | FragmentSelf2514["__typename"]
  | FragmentSelf2514["typenameHint"] | FragmentToken2512 | FragmentToken2513;
