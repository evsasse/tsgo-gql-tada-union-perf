import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4520 } from "./fragment4520";
import type { FragmentToken4521 } from "./fragment4521";

export const FRAGMENT_4522 = gql(`
  fragment Fragment4522 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult4522 = ResultOf<typeof FRAGMENT_4522>;
type FragmentSelf4522 = NonNullable<FragmentResult4522>;

export type FragmentToken4522 =
  | FragmentSelf4522["__typename"]
  | FragmentSelf4522["typenameHint"] | FragmentToken4520 | FragmentToken4521;
