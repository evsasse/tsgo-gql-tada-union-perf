import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2842 } from "./fragment2842";
import type { FragmentToken2843 } from "./fragment2843";

export const FRAGMENT_2844 = gql(`
  fragment Fragment2844 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult2844 = ResultOf<typeof FRAGMENT_2844>;
type FragmentSelf2844 = NonNullable<FragmentResult2844>;

export type FragmentToken2844 =
  | FragmentSelf2844["__typename"]
  | FragmentSelf2844["typenameHint"] | FragmentToken2842 | FragmentToken2843;
