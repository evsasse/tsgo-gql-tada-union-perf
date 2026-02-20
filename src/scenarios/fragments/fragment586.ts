import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken584 } from "./fragment584";
import type { FragmentToken585 } from "./fragment585";

export const FRAGMENT_586 = gql(`
  fragment Fragment586 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult586 = ResultOf<typeof FRAGMENT_586>;
type FragmentSelf586 = NonNullable<FragmentResult586>;

export type FragmentToken586 =
  | FragmentSelf586["__typename"]
  | FragmentSelf586["typenameHint"] | FragmentToken584 | FragmentToken585;
