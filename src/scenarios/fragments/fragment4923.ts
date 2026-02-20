import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4921 } from "./fragment4921";
import type { FragmentToken4922 } from "./fragment4922";

export const FRAGMENT_4923 = gql(`
  fragment Fragment4923 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult4923 = ResultOf<typeof FRAGMENT_4923>;
type FragmentSelf4923 = NonNullable<FragmentResult4923>;

export type FragmentToken4923 =
  | FragmentSelf4923["__typename"]
  | FragmentSelf4923["typenameHint"] | FragmentToken4921 | FragmentToken4922;
