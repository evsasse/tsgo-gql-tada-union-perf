import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4859 } from "./fragment4859";
import type { FragmentToken4860 } from "./fragment4860";

export const FRAGMENT_4861 = gql(`
  fragment Fragment4861 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult4861 = ResultOf<typeof FRAGMENT_4861>;
type FragmentSelf4861 = NonNullable<FragmentResult4861>;

export type FragmentToken4861 =
  | FragmentSelf4861["__typename"]
  | FragmentSelf4861["typenameHint"] | FragmentToken4859 | FragmentToken4860;
