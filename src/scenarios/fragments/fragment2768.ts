import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2766 } from "./fragment2766";
import type { FragmentToken2767 } from "./fragment2767";

export const FRAGMENT_2768 = gql(`
  fragment Fragment2768 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult2768 = ResultOf<typeof FRAGMENT_2768>;
type FragmentSelf2768 = NonNullable<FragmentResult2768>;

export type FragmentToken2768 =
  | FragmentSelf2768["__typename"]
  | FragmentSelf2768["typenameHint"] | FragmentToken2766 | FragmentToken2767;
