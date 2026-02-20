import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4225 } from "./fragment4225";
import type { FragmentToken4226 } from "./fragment4226";

export const FRAGMENT_4227 = gql(`
  fragment Fragment4227 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult4227 = ResultOf<typeof FRAGMENT_4227>;
type FragmentSelf4227 = NonNullable<FragmentResult4227>;

export type FragmentToken4227 =
  | FragmentSelf4227["__typename"]
  | FragmentSelf4227["typenameHint"] | FragmentToken4225 | FragmentToken4226;
