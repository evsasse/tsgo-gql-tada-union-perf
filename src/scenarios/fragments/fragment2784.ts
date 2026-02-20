import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2782 } from "./fragment2782";
import type { FragmentToken2783 } from "./fragment2783";

export const FRAGMENT_2784 = gql(`
  fragment Fragment2784 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult2784 = ResultOf<typeof FRAGMENT_2784>;
type FragmentSelf2784 = NonNullable<FragmentResult2784>;

export type FragmentToken2784 =
  | FragmentSelf2784["__typename"]
  | FragmentSelf2784["typenameHint"] | FragmentToken2782 | FragmentToken2783;
