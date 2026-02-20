import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4540 } from "./fragment4540";
import type { FragmentToken4541 } from "./fragment4541";

export const FRAGMENT_4542 = gql(`
  fragment Fragment4542 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult4542 = ResultOf<typeof FRAGMENT_4542>;
type FragmentSelf4542 = NonNullable<FragmentResult4542>;

export type FragmentToken4542 =
  | FragmentSelf4542["__typename"]
  | FragmentSelf4542["typenameHint"] | FragmentToken4540 | FragmentToken4541;
