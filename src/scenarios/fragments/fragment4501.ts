import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4499 } from "./fragment4499";
import type { FragmentToken4500 } from "./fragment4500";

export const FRAGMENT_4501 = gql(`
  fragment Fragment4501 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult4501 = ResultOf<typeof FRAGMENT_4501>;
type FragmentSelf4501 = NonNullable<FragmentResult4501>;

export type FragmentToken4501 =
  | FragmentSelf4501["__typename"]
  | FragmentSelf4501["typenameHint"] | FragmentToken4499 | FragmentToken4500;
