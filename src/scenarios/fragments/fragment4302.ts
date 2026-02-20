import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4300 } from "./fragment4300";
import type { FragmentToken4301 } from "./fragment4301";

export const FRAGMENT_4302 = gql(`
  fragment Fragment4302 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult4302 = ResultOf<typeof FRAGMENT_4302>;
type FragmentSelf4302 = NonNullable<FragmentResult4302>;

export type FragmentToken4302 =
  | FragmentSelf4302["__typename"]
  | FragmentSelf4302["typenameHint"] | FragmentToken4300 | FragmentToken4301;
