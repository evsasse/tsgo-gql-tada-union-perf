import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4224 } from "./fragment4224";
import type { FragmentToken4225 } from "./fragment4225";

export const FRAGMENT_4226 = gql(`
  fragment Fragment4226 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult4226 = ResultOf<typeof FRAGMENT_4226>;
type FragmentSelf4226 = NonNullable<FragmentResult4226>;

export type FragmentToken4226 =
  | FragmentSelf4226["__typename"]
  | FragmentSelf4226["typenameHint"] | FragmentToken4224 | FragmentToken4225;
