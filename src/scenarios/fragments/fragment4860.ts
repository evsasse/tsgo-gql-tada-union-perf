import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4858 } from "./fragment4858";
import type { FragmentToken4859 } from "./fragment4859";

export const FRAGMENT_4860 = gql(`
  fragment Fragment4860 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult4860 = ResultOf<typeof FRAGMENT_4860>;
type FragmentSelf4860 = NonNullable<FragmentResult4860>;

export type FragmentToken4860 =
  | FragmentSelf4860["__typename"]
  | FragmentSelf4860["typenameHint"] | FragmentToken4858 | FragmentToken4859;
