import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2511 } from "./fragment2511";
import type { FragmentToken2512 } from "./fragment2512";

export const FRAGMENT_2513 = gql(`
  fragment Fragment2513 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult2513 = ResultOf<typeof FRAGMENT_2513>;
type FragmentSelf2513 = NonNullable<FragmentResult2513>;

export type FragmentToken2513 =
  | FragmentSelf2513["__typename"]
  | FragmentSelf2513["typenameHint"] | FragmentToken2511 | FragmentToken2512;
