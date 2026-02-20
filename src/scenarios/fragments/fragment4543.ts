import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4541 } from "./fragment4541";
import type { FragmentToken4542 } from "./fragment4542";

export const FRAGMENT_4543 = gql(`
  fragment Fragment4543 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult4543 = ResultOf<typeof FRAGMENT_4543>;
type FragmentSelf4543 = NonNullable<FragmentResult4543>;

export type FragmentToken4543 =
  | FragmentSelf4543["__typename"]
  | FragmentSelf4543["typenameHint"] | FragmentToken4541 | FragmentToken4542;
