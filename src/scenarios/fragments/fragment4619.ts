import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4617 } from "./fragment4617";
import type { FragmentToken4618 } from "./fragment4618";

export const FRAGMENT_4619 = gql(`
  fragment Fragment4619 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult4619 = ResultOf<typeof FRAGMENT_4619>;
type FragmentSelf4619 = NonNullable<FragmentResult4619>;

export type FragmentToken4619 =
  | FragmentSelf4619["__typename"]
  | FragmentSelf4619["typenameHint"] | FragmentToken4617 | FragmentToken4618;
