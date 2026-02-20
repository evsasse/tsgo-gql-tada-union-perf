import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2871 } from "./fragment2871";
import type { FragmentToken2872 } from "./fragment2872";

export const FRAGMENT_2873 = gql(`
  fragment Fragment2873 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult2873 = ResultOf<typeof FRAGMENT_2873>;
type FragmentSelf2873 = NonNullable<FragmentResult2873>;

export type FragmentToken2873 =
  | FragmentSelf2873["__typename"]
  | FragmentSelf2873["typenameHint"] | FragmentToken2871 | FragmentToken2872;
