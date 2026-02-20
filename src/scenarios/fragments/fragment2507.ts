import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2505 } from "./fragment2505";
import type { FragmentToken2506 } from "./fragment2506";

export const FRAGMENT_2507 = gql(`
  fragment Fragment2507 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult2507 = ResultOf<typeof FRAGMENT_2507>;
type FragmentSelf2507 = NonNullable<FragmentResult2507>;

export type FragmentToken2507 =
  | FragmentSelf2507["__typename"]
  | FragmentSelf2507["typenameHint"] | FragmentToken2505 | FragmentToken2506;
