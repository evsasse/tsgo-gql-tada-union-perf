import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4828 } from "./fragment4828";
import type { FragmentToken4829 } from "./fragment4829";

export const FRAGMENT_4830 = gql(`
  fragment Fragment4830 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult4830 = ResultOf<typeof FRAGMENT_4830>;
type FragmentSelf4830 = NonNullable<FragmentResult4830>;

export type FragmentToken4830 =
  | FragmentSelf4830["__typename"]
  | FragmentSelf4830["typenameHint"] | FragmentToken4828 | FragmentToken4829;
