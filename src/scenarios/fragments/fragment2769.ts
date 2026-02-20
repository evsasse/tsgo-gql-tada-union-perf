import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2767 } from "./fragment2767";
import type { FragmentToken2768 } from "./fragment2768";

export const FRAGMENT_2769 = gql(`
  fragment Fragment2769 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult2769 = ResultOf<typeof FRAGMENT_2769>;
type FragmentSelf2769 = NonNullable<FragmentResult2769>;

export type FragmentToken2769 =
  | FragmentSelf2769["__typename"]
  | FragmentSelf2769["typenameHint"] | FragmentToken2767 | FragmentToken2768;
