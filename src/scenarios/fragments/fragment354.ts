import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken352 } from "./fragment352";
import type { FragmentToken353 } from "./fragment353";

export const FRAGMENT_354 = gql(`
  fragment Fragment354 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult354 = ResultOf<typeof FRAGMENT_354>;
type FragmentSelf354 = NonNullable<FragmentResult354>;

export type FragmentToken354 =
  | FragmentSelf354["__typename"]
  | FragmentSelf354["typenameHint"] | FragmentToken352 | FragmentToken353;
