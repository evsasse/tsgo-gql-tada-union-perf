import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4872 } from "./fragment4872";
import type { FragmentToken4873 } from "./fragment4873";

export const FRAGMENT_4874 = gql(`
  fragment Fragment4874 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult4874 = ResultOf<typeof FRAGMENT_4874>;
type FragmentSelf4874 = NonNullable<FragmentResult4874>;

export type FragmentToken4874 =
  | FragmentSelf4874["__typename"]
  | FragmentSelf4874["typenameHint"] | FragmentToken4872 | FragmentToken4873;
