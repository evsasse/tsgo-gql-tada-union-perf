import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken490 } from "./fragment490";
import type { FragmentToken491 } from "./fragment491";

export const FRAGMENT_492 = gql(`
  fragment Fragment492 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult492 = ResultOf<typeof FRAGMENT_492>;
type FragmentSelf492 = NonNullable<FragmentResult492>;

export type FragmentToken492 =
  | FragmentSelf492["__typename"]
  | FragmentSelf492["typenameHint"] | FragmentToken490 | FragmentToken491;
