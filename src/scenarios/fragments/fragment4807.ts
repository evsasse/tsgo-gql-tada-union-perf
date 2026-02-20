import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4805 } from "./fragment4805";
import type { FragmentToken4806 } from "./fragment4806";

export const FRAGMENT_4807 = gql(`
  fragment Fragment4807 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult4807 = ResultOf<typeof FRAGMENT_4807>;
type FragmentSelf4807 = NonNullable<FragmentResult4807>;

export type FragmentToken4807 =
  | FragmentSelf4807["__typename"]
  | FragmentSelf4807["typenameHint"] | FragmentToken4805 | FragmentToken4806;
