import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4804 } from "./fragment4804";
import type { FragmentToken4805 } from "./fragment4805";

export const FRAGMENT_4806 = gql(`
  fragment Fragment4806 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult4806 = ResultOf<typeof FRAGMENT_4806>;
type FragmentSelf4806 = NonNullable<FragmentResult4806>;

export type FragmentToken4806 =
  | FragmentSelf4806["__typename"]
  | FragmentSelf4806["typenameHint"] | FragmentToken4804 | FragmentToken4805;
